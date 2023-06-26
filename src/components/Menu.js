import React from "react";

const Menu = () => {

    const posts = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consecteruer',
            desc: "Lorem ipsum convallis volutpat aliquet nostra duis rutrum pharetra sollicitudin curabitur, integer vel torquent nec vehicula sollicitudin velit quis.",
            img:"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWVzdGhldGljJTIwd2hpdGUlMjBhbmQlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet consecteruer',
            desc: "Lorem ipsum convallis volutpat aliquet nostra duis rutrum pharetra sollicitudin curabitur, integer vel torquent nec vehicula sollicitudin velit quis.",
            img:"https://images.unsplash.com/photo-1517487618188-7168abd3ca7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWVzdGhldGljJTIwd2hpdGUlMjBhbmQlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet consecteruer',
            desc: "Lorem ipsum convallis volutpat aliquet nostra duis rutrum pharetra sollicitudin curabitur, integer vel torquent nec vehicula sollicitudin velit quis.",
            img:"https://images.unsplash.com/photo-1502898664531-0564045a0da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFlc3RoZXRpYyUyMHdoaXRlJTIwYW5kJTIwcGlua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet consecteruer',
            desc: "Lorem ipsum convallis volutpat aliquet nostra duis rutrum pharetra sollicitudin curabitur, integer vel torquent nec vehicula sollicitudin velit quis.",
            img:"https://images.unsplash.com/photo-1527683040093-3a2b80ed1592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFlc3RoZXRpYyUyMHdoaXRlJTIwYW5kJTIwcGluayUyMGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        }
    ]
    return (
        <div className="menu">
            <h1>Other Post You May Like</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                    </div>
            ))}

        </div>
    )
}

export default Menu