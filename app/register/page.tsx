import './page.scss';

export default function Register(): React.ReactElement {
    return (
        <main id="register-main">
            <h1>Register</h1>
            <form action="" method="post">
                <input type="text" name="username" />
                <input type="password" name="password" placeholder="password" />
                <button type="submit" value="submit" />
            </form>
        </main>
    )
}