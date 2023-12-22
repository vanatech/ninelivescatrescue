import React, {Component} from 'react';
import { Input, Textarea } from "@material-tailwind/react";

export class Contact extends Component {
    render() {
        return (
            <>
                <div className="flex items-center justify-center mt-16">
                    <form action="/" method="post" className="w-full md:w-[40%] h-[500px] flex flex-col justify-around items-center p-10 md:outline md:outline-secondary rounded-lg">
                        <fieldset className="md:w-full md:relative">
                            <legend className="text-3xl mt-10 self-start md:absolute md:-top-[150px] md:bg-white md:p-4">Contact Us</legend>

                            <div className="w-full mt-10">
                                <Input label="Name" />
                            </div>

                            <div className="w-full mt-6">
                                <Input label="Email" />
                            </div>

                            <div className="w-full mt-6">
                                <Textarea label="Message" />
                            </div>

                            <div className="btn btn-primary w-full mt-6">
                                <button className="text-white" type="submit">Send your message</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </>
        );
    }
}

