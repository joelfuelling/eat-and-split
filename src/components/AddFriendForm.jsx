import {useState} from 'react'
import Button from "./Button";

export default function AddFriend({onAddFriend}) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('https://i.pravatar.cc/48')

    function handleSubmit(e) {
        e.preventDefault()

        //* Guard Clause: If there is no name or image, then return.
        if(!name || !image) return

        // Create the newFriend object including a randomUUID 
        const id = crypto.randomUUID()
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        }
        // Add friend to friends array here. Below, onAddFriend is the prop for handleAddFriend
        onAddFriend(newFriend)
        // Set inputs to empty strings/defaults.
        setName('')
        setImage('')
        
    }

    return (
        <>
        <div>   
            <form className="form-add-friend" onSubmit={handleSubmit}>
                <p>Friend name </p>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p> Image URL </p>
                <input 
                    type="text" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <Button className="button" handleAddFriend={onAddFriend} >Add</Button>
            </form> 
        </div>
        </>
    )
    }
