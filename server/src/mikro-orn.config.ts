import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM} from "@mikro-orm/core"

export default {
    dbName: 'lireddit',
    type: 'postgresql',
    debug: !__prod__,
    entities: [Post]
} as Parameters<typeof MikroORM.init>[0];