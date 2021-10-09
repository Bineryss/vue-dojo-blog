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
            await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(post)

            })
        } catch (err) {
            error.value = err
        }
    }

    return {
        error,

        create
    }
}

export default createPost