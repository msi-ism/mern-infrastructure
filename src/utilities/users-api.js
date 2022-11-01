// ^ This is the base path of the Express route we'll define
const BASE_URL = '/api/users';

export async function signUp(userData) {
    console.log(userData)
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
    console.log(res)

    if (res.ok) {
        return res.json()
    } else {
        // ^ 'throw is a keyword to create custom error messages 
        throw new Error('Invalid Sign Up')
    }
}
