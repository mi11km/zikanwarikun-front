import Head from 'next/head';
import React from 'react';

import { useSignupMutation } from '../graphql/__generated__/graphql';

const Home: React.FC = () => {
    let email: HTMLInputElement,
        password: HTMLInputElement,
        school: HTMLInputElement,
        name: HTMLInputElement;
    const [signupMutation, { loading, error }] = useSignupMutation();

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signupMutation({
            variables: {
                input: {
                    email: email.value,
                    password: password.value,
                    name: name.value,
                    school: school.value
                }
            }
        }).then((r) => {
            console.log(r);
        });
    };

    if (error) return <h1>An error occurred!</h1>;
    if (loading) return <h1>Loading now!</h1>;

    return (
        <div>
            <Head>
                <title>時間割くん | zoomが自動で開く時間割サービス</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <form onSubmit={handleSignup}>
                <input
                    type="email"
                    ref={(node: HTMLInputElement) => {
                        email = node;
                    }}
                />
                <br />
                <input
                    type="password"
                    ref={(node: HTMLInputElement) => {
                        password = node;
                    }}
                />
                <br />
                <input
                    type="text"
                    ref={(node: HTMLInputElement) => {
                        name = node;
                    }}
                />
                <br />
                <input
                    type="text"
                    ref={(node: HTMLInputElement) => {
                        school = node;
                    }}
                />
                <br />
                <button type="submit">登録する</button>
            </form>

            <style jsx>{`
                form {
                    text-align: center;
                }

                form input {
                    margin-bottom: 16px;
                }
            `}</style>
        </div>
    );
};

export default Home;
