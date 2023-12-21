import React, {Component} from 'react';

export class Contact extends Component {
    render() {
        return (
            <>
                <div className="flex items-center justify-center mt-16">
                    <form action="/" method="post" className="w-full md:w-[40%] h-[60vh] flex flex-col justify-around items-center p-10 md:outline md:outline-secondary rounded-lg">
                        <fieldset className="md:w-full md:relative">
                            <legend className="text-3xl mt-10 self-start md:absolute md:-top-[122px] md:bg-white md:p-4">Contact Us</legend>

                            <div className="w-full mt-10">
                                <label htmlFor="name">Name:</label>
                                <input type="text" placeholder="Name" id="name" name="user_name" className="input input-bordered w-full mt-2" />
                            </div>

                            <div className="w-full mt-6">
                                <label htmlFor="email">Email:</label>
                                <input type="text" placeholder="Email" id="email" name="user_email" className="input input-bordered w-full mt-2" />
                            </div>

                            <div className="w-full mt-6">
                                <label htmlFor="msg">Message:</label>
                                <textarea id="msg" name="user_message" className="textarea textarea-lg w-full textarea-bordered mt-2" placeholder="Message"></textarea>
                            </div>

                            <div className="btn btn-primary w-full mt-10">
                                <button className="text-white" type="submit">Send your message</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </>
        );
    }
}

