function Footer(props) {
    return (
        <footer>
            <p>
                Copyright &copy; Erik Kralj 2022
            </p>
            <p>
                {props.text} - footer
            </p>
        </footer>
    );
}

export default Footer;