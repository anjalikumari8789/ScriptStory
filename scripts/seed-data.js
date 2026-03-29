import dotenv from 'dotenv';
import bcryptjs from 'bcryptjs';
import User from '../api/src/models/user.model.js';
import Post from '../api/src/models/post.model.js';

dotenv.config();

const DEFAULT_PASSWORD = 'Pass@123';

const usersSeed = [
  {
    username: 'adminuser',
    email: 'admin@scriptstory.dev',
    isAdmin: true,
    profilePicture:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80',
  },
  {
    username: 'alexrivera',
    email: 'alex@scriptstory.dev',
    isAdmin: false,
    profilePicture:
      'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=400&q=80',
  },
  {
    username: 'norafields',
    email: 'nora@scriptstory.dev',
    isAdmin: false,
    profilePicture:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    username: 'liamstone',
    email: 'liam@scriptstory.dev',
    isAdmin: false,
    profilePicture:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    username: 'mayakhan',
    email: 'maya@scriptstory.dev',
    isAdmin: false,
    profilePicture:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
  },
];

const postTemplates = [
  {
    title: 'Designing React Components That Stay Readable at Scale',
    category: 'reactjs',
    content: `When a codebase grows, components often become cluttered with UI, business rules, and data fetching in a single file. The first step toward clarity is to define one clear responsibility per component and move cross-cutting logic into dedicated hooks.

Start by splitting layout from behavior. Keep visual composition in the component, and move conditional branches, derived state, and side effects into custom hooks. This gives you testable logic that can evolve independently from styling.

Name components by intent, not structure. A name like UserProfileHeader tells future readers why it exists. A name like CardTopSection forces people to inspect code to understand purpose.

Finally, make props expressive and stable. Prefer passing rich objects with clear shape over a long list of primitive flags. A cleaner prop contract reduces accidental complexity and makes refactoring less risky as features expand.`,
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'A Practical Guide to Better API Error Handling',
    category: 'javascript',
    content: `Users rarely complain about perfectly running flows; they remember how your product behaves when something breaks. That is why error handling is not a side concern but a core user experience decision.

Return errors in a predictable shape so your frontend can react consistently. Include a human-readable message, a machine-friendly code, and a status that reflects the scenario. Ambiguous errors make debugging expensive.

On the client side, never assume a request succeeds. Wrap asynchronous calls with try/catch and always reset loading indicators in a finally block. This prevents interfaces from getting stuck in states that feel frozen.

Treat every failure path as a designed journey. Good error handling gives users confidence that your application is resilient, transparent, and respectful of their time.`,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'How to Structure a Next.js Project for Long-Term Growth',
    category: 'nextjs',
    content: `Fast starts are easy; sustainable growth is hard. A healthy Next.js project begins with conventions that make collaboration predictable across features and teams.

Group code by domain rather than by technical layer when possible. Keeping related pages, components, hooks, and server logic close together shortens feedback loops and improves maintainability.

Invest in boundaries between server and client responsibilities. Avoid leaking server-only concerns into browser code and keep hydration-sensitive code explicit. This keeps performance tuning straightforward as traffic increases.

As complexity rises, quality comes from consistent habits: clear naming, small modules, focused tests, and disciplined review. Architecture is less about perfection and more about making good decisions repeatable.`,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'From Idea to Shipping: Building Features with Confidence',
    category: 'uncategorized',
    content: `Great features are not born fully formed. They emerge from a rhythm: clarify the problem, define success, build a narrow first version, and iterate with evidence.

Start with small, explicit milestones. Shipping early slices gives you real feedback and reduces the cost of changing direction. Waiting for a perfect version often delays learning.

When implementing, focus on observability as much as functionality. Add logs, meaningful error states, and basic metrics so you can understand behavior after release.

Confidence in delivery comes from reducing unknowns at every step. Keep loops short, communicate clearly, and make each release a chance to improve both the product and the process.`,
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Writing JavaScript That Future You Will Thank You For',
    category: 'javascript',
    content: `Maintainable JavaScript is not about clever tricks. It is about writing code that a teammate can understand quickly and modify safely six months from now.

Prefer explicitness over compression. A few extra lines with clear variable names can save hours of debugging. The shortest code is not always the most readable code.

Keep functions small and purposeful. A function that transforms data, validates input, and updates UI state is likely doing too much. Split by responsibility and test behavior in isolation.

Consistency is the quiet superpower of mature codebases. Shared patterns in naming, error handling, and module design make everyday development smoother and less error-prone.`,
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
  },
];

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const buildSeedPosts = (users) => {
  const posts = [];

  users.forEach((user, userIndex) => {
    postTemplates.slice(0, 4).forEach((template, templateIndex) => {
      const title = `${template.title} (${user.username} Edition ${templateIndex + 1})`;
      posts.push({
        userId: user._id.toString(),
        title,
        slug: `${slugify(title)}-${userIndex + 1}${templateIndex + 1}`,
        category: template.category,
        image: template.image,
        content: `${template.content}\n\nAuthor's note: Written by ${user.username} for the ScriptStory community.`,
      });
    });
  });

  return posts;
};

const seed = async () => {
  if (!process.env.MONGO) {
    throw new Error('MONGO is missing in .env');
  }

  const connection = User.db;
  if (connection.readyState === 0) {
    await connection.openUri(process.env.MONGO, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });
  }
  console.log('Connected to MongoDB');

  try {
    await Post.deleteMany({});
    await User.deleteMany({});

    const hashedPassword = bcryptjs.hashSync(DEFAULT_PASSWORD, 10);

    const createdUsers = await User.insertMany(
      usersSeed.map((user) => ({
        ...user,
        password: hashedPassword,
      }))
    );

    const createdPosts = await Post.insertMany(buildSeedPosts(createdUsers));

    console.log(`Seed complete: ${createdUsers.length} users and ${createdPosts.length} posts.`);
    console.log('Login password for all seeded users:', DEFAULT_PASSWORD);
    console.log('Admin email:', usersSeed.find((user) => user.isAdmin)?.email);
  } finally {
    await connection.close();
    console.log('Disconnected from MongoDB');
  }
};

seed().catch((error) => {
  console.error('Seeding failed:', error.message);
  process.exitCode = 1;
});