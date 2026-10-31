import prisma from "../config/prisma.js";


const createPost = async(req,res)=>{
    try{
        const {user_id,title,description} = req.body;
        await prisma.posts.create({
            Post:{
                user_id:Number(user_id),
                title:title,
                description:description
            }
        })

        res.status(201).json({
            message:"Post Created Successfully!"
        })
    }catch(err){
        console.log(err);
    }
}

const fetchPost = async(req,res)=>{
    try{
        const {posts_id} = req.body;
        const userFetchedPost = await prisma.posts.findMany({
            where:{posts_id:posts_id}
        });
        res.status(200).json({
            message:userFetchedPost
        })
        
    }catch(err){
        console.log(err);
    }
}

const updatePost = async(req,res)=>{
    const postId = req.params;
    const {title,description} = req.body;

    await prisma.posts.update({
        where:{
            id:Number(postId) 
        },
        Post:{
            title:title,
            description:description
        }
    })
    res.status(200).json({
            message:"Post Updated Successfully!"
        })
}

const deletePost = async(req,res)=>{
    const postId = req.params;

    await prisma.posts.update({
        where:{
            id:Number(postId) 
        }
    })
    res.status(200).json({
            message:"Post Deleted Successfully!"
        })
}

const PostControllers={
    createPost,
    fetchPost,
    updatePost,
    deletePost
}

export default crudControllers