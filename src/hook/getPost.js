import {ref} from 'vue'

const getPost = (/** @type {Number} */ id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            //simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 1000)
            })

            const data = await fetch('http://localhost:3000/posts/' + id)
            if (!data.ok) {
                throw Error('No data available')
            }
            post.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }

    return {
        post,
        error,
        load,
    }
}

export default getPost
