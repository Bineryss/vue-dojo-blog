import {projectFirestore} from "@/firebase/config";

const {ref} = require("vue");

const createPost = () => {
    const error = ref(null)

    const create = async (title, body, tags) => {
        const post = {
            title: title,
            body: body,
            tags: tags
        }

        try {
            await projectFirestore.collection('posts').add(post)
        } catch
            (err) {
            error.value = err
        }
    }

    return {
        error,

        create
    }
}

export default createPost