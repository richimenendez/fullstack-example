import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orn.config"

const main = async () => {
    const orm = await MikroORM.init(
        microConfig 
    );

    console.log('----------- sql 1 ----------------')
    const post = orm.em.create(Post, {title: 'my fist post'})
    await orm.em.persistAndFlush(post)
    console.log('----------- sql 2 ----------------')
    await orm.em.nativeInsert(Post,{title: 'my first post with native Insert'})
}

main().catch((err)=>{
    console.log(err)
})


console.log("Hello World :)");
console.log("Hello World :)");
