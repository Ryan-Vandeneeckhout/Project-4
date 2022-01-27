import { getDatabase, set, ref } from 'firebase/database';

const ButtonLiked = (props) => {

    const writeUserData = (event) => {
       
        event.preventDefault();
        const db = getDatabase();
        
        set(ref(db, `City/${props.cityName}/${props.userInputTerm}/${props.restaurantName}`), {
            name: props.restaurantName, image: props.image, message: ""
        });
        
        set(ref(db, `Saved/${props.cityName}/`), {
            name: `${props.cityName}`,
        });
        set(ref(db, `Activity/${props.userInputTerm}/`), {
            name: `${props.userInputTerm}`,
        });
    }
    return (

        <>

            <div onClick={writeUserData} className="ButtonLiked">
                <i className="far fa-plus-square"></i>
            </div>
            
        </>
    )
}

export default ButtonLiked;