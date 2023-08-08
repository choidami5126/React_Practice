const User = ({ item, removeFunction }) => {
    return (
        <div key={item.id} className="component-style">
            {item.age} - {item.name}
            <button onClick={() => removeFunction(item.id)}>X</button>
        </div>
    )
}

export default User;