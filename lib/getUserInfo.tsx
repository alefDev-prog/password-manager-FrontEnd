export default async function getInfoTest(id: string) {
  
    const resp = await fetch(`http://localhost:5000/data?id=${id}`, {
        method: "GET",
        credentials:"include",
        headers: {
            "Content-type": "application/json",
        }
        
    });

    if(!resp.ok) {
        throw new Error('failed to get user info');
    }

    return resp.json();
}
