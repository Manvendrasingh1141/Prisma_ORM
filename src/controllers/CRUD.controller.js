import prisma from "../config/prisma.js";


const createData = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        await prisma.user.create({
            data:{
                name:name,
                email:email,
                password:password
            }
        })

        res.status(201).json({
            message:"User Created Successfully!"
        })
    }catch(err){
        console.log(err);
    }
}

const fetchData = async(req,res)=>{
    try{
        const {email} = req.body;
        const userFetchedData = await prisma.user.findMany({
            where:{email}
        });
        res.status(200).json({
            message:userFetchedData
        })
        
    }catch(err){
        console.log(err);
    }
}

const updateData = async(req,res)=>{
    const userId = req.params;
    const {name,email,password} = req.body;

    await prisma.user.update({
        where:{
            id:Number(userId ) 
        },
        data:{
            name:name,
            email:email,
            password:password
        }
    })
    res.status(200).json({
            message:"User Updated Successfully!"
        })
}

const deleteData = async(req,res)=>{
    const userId = req.params;

    await prisma.user.update({
        where:{
            id:Number(userId) 
        }
    })
    res.status(200).json({
            message:"User Deleted Successfully!"
        })
}

const crudControllers={
    createData,
    fetchData,
    updateData,
    deleteData
}

export default crudControllers