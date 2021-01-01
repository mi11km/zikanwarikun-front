import { gql, useMutation } from '@apollo/client';
import Head from 'next/head';
import React from 'react';

const SIGNUP = gql`
    mutation signup($email: String!, $password: String!, $name: String!, $school: String!) {
        signup(input: { email: $email, password: $password, name: $name, school: $school }) {
            user {
                id
                email
                name
                school
                timetables {
                    id
                }
            }
            token
        }
    }
`;

const Home: React.FC = () => {
    let email: HTMLInputElement,
        password: HTMLInputElement,
        school: HTMLInputElement,
        name: HTMLInputElement;

    const [signup, { loading, error }] = useMutation(SIGNUP);

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signup({
            variables: {
                email: email.value,
                password: password.value,
                name: name.value,
                school: school.value
            }
        }).then((r) => {
            console.log(r);
        });
    };

    if (loading) return <h1>Loading now!</h1>;
    if (error) return <h1>An error occurred!</h1>;

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
