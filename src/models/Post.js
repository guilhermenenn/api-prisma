import { prisma } from "../../config/prisma.js";

export const createPost = async (title, userId, subtitle, body) => {
    try {
        return await prisma.post.create({
            data: {
                title,
                userId,
                subtitle,
                body,
            },
        });
    } catch (error) {
        throw new Error(`Failed to create Post: ${error.message}`);
    }
};

export const findPost = async () => {
    try {
        return await prisma.post.findMany();
    } catch (error) {
        throw new Error(`Failed to get all post: ${error.message}`);
    }

}

export const findPostById = async (id) => {
    return await prisma.post.findUnique({
        where: {
            id,
        },
    });
};

export const updatePost = async (id, title, userId, subtitle, body) => {
    return await prisma.post.update({
        where: {
            id: id
        },
        data: {
            title: title,
            userId: userId,
            subtitle: subtitle,
            body: body,
        },
    });
};

export const deletePost = async (id) => {
    return await prisma.post.delete({
        where: {
            id,
        },
    });
};