import React, { useState } from "react";

export interface PersonInterface {
    name: string;
    age: number;
    isMarried?: boolean;    // ? denotes it is nullable
    country: Country;
}

// type PersonType = {
//     name: string;
//     age: number;
//     isMarried?: boolean; // is is nullable
// }

export enum Country {
    PAK = 'Pakistan',
    USA = 'United States of America',
    UK = 'United Kingdom',
    CAN = 'Canada',
    AUS = 'Australia',
}



// FC means functional component and <PersonInterface> is the interface we're using for our props
const Person: React.FC<PersonInterface> = (props) => {
    // const { isMarried } = props
    // const isMarried = props.isMarried

    // const [showInfo, setShowInfo] = useState(true)

    // We can also use above one as it will work fine but if we want to assign multiple types or even specify a type then we can use below ones
    // const [showInfo, setShowInfo] = useState<boolean>(true)
    // const [showInfo, setShowInfo] = useState<boolean | null>(true)
    const [showInfo, setShowInfo] = useState<boolean | null | string>(true)

    const [bio, setBio] = useState<string | null>(null)

    const toggleDisplay = () => {
        setShowInfo(prev => !prev)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBio(e.target.value)
    }

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    // }


    return (
        <>
            {
                showInfo && (
                    <div>
                        Person name : {props.name} <br />
                        Age : {props.age} <br />
                        Country : {props.country} <br />
                        {
                            props.isMarried ? (
                                <span>Person is married</span>
                            ) : (
                                <span>Person is single</span>
                            )
                        }
                        <br />
                        <span>Bio: {bio ? <>{bio}</> : <>No bio</>}</span>
                        <br />
                        <input type="text" onChange={handleChange} />
                        <br /><br />
                    </div>
                )
            }

            <button onClick={toggleDisplay}>Toggle</button>
            <br /><br />
        </>
    )
}




// We can also use below ways

// const Person = (props: PersonInterface) => {
//   return (
//     <div>
//         Person name : { props.name } <br />
//         Age : { props.age } <br />
//         {
//             props.isMarried ? (
//                 <span>Person is married</span>
//             ) : (
//                 <span>Person is single</span>
//             )
//         }
//         <br /><br />
//     </div>
//   )
// }

// const Person = ({ name, age, isMarried }: { name: string, age: number, isMarried: boolean }) => {
//   return (
//     <div>
//         Person name : { name } <br />
//         Age : { age } <br />
//         {
//             isMarried ? (
//                 <span>Person is married</span>
//             ) : (
//                 <span>Person is single</span>
//             )
//         }
//         <br /><br />
//     </div>
//   )
// }

// We can use both PersonInterface and PersonType here
// const Person = ({ name, age, isMarried }: PersonInterface) => {
//   return (
//     <div>
//         Person name : { name } <br />
//         Age : { age } <br />
//         {
//             isMarried ? (
//                 <span>Person is married</span>
//             ) : (
//                 <span>Person is single</span>
//             )
//         }
//         <br /><br />
//     </div>
//   )
// }

// const Person = (props: { name: string, age: number, isMarried: boolean }) => {
//     // const { isMarried } = props
//     const isMarried = props.isMarried

//     return (
//         <div>
//             Person name : { props.name } <br />
//             Age : { props.age } <br />
//             {
//                 isMarried ? (
//                     <span>Person is married</span>
//                 ) : (
//                     <span>Person is single</span>
//                 )
//             }
//             <br /><br />
//         </div>
//     )
// }


export default Person