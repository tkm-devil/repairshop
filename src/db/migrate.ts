import { db } from './index';
import { migrate } from 'drizzle-orm/neon-http/migrator';

const main = async () => {
    try {
        // Run migrations
        await migrate(db, { migrationsFolder: 'src/db/migrations' });
        console.log('Database migration completed successfully.');
    } catch (error) {
        console.error('Error during database migration:', error);
        process.exit(1);
    }
}

main()