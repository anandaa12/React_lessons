import React, { useContext } from "react";
import MyContext from '../context/MyContext'
export default function Header(){

    const { name, title } = useContext(MyContext);
    return(
        <div>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <div>
                <MyContext.Consumer>
                    {
                        ({name, title}) => (
                            <div>
                                It's using consumer {name}
                                <br />
                                It's using consumer {title}
                            </div>
                        )
                    }
                </MyContext.Consumer>
            </div>

        </div>
    )
}