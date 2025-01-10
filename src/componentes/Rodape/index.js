import './rodape.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <section>
                <div>
                    <a  href='http://facebook.com' ><img src='/images/fb.png' alt='Facebook logo' /></a>
                    <a href='http://twitter.com'>< img src='/images/tw.png' alt='Twitter logo' /></a>
                    <a href='http://instagram.com/vhugo_as'><img src='/images/ig.png' alt='Instagram logo' /></a>
                </div>
                <img src='/images/logo.png' alt='Logo organo' />
                <h3>Desenvolvido por Vitor Hugo</h3>
            </section>
        </footer>

    )
}
export default Footer