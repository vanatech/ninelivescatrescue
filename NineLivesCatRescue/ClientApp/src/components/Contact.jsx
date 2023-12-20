import React, {Component} from 'react';
import feedback from '../images/feedback.png';


export class Contact extends Component {
    render() {
        return (
            <>
                <div className="flex items-center justify-center mt-16">
                    <form action="/" method="post" className="w-[50%] h-[60vh] flex flex-col justify-around items-center">
                        
                        
                        

                        <h1 className="text-3xl mt-10 self-start ml-4">Contact Us</h1>
                        
                        <div className="flex w-full mt-10 gap-4">
                            <div className="w-full">
                                <label htmlFor="name">Name:</label>
                                <input type="text" placeholder="Name" id="name" name="user_name" className="input input-bordered input-secondary w-full mt-2" />
                            </div>

                            <div className="w-full">
                                <label htmlFor="email">Email:</label>
                                <input type="text" placeholder="Email" id="email" name="user_email" className="input input-bordered input-secondary w-full mt-2" />
                            </div>
                        </div>
                        

                        <div className="w-full mt-6">
                            <label htmlFor="msg">Message:</label>
                            <textarea id="msg" name="user_message" className="textarea textarea-lg w-full textarea-secondary mt-2" placeholder="Message"></textarea>
                        </div>

                        <div className="btn btn-accent w-1/2 mt-10">
                            <button className="text-white" type="submit">Send your message</button>
                        </div>

                        <div className="w-full mt-20">
                            <img className="w-full" src={feedback} alt="" />
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

