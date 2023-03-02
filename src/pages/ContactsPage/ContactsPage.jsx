import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactsList/ContactsList";
import { Filter } from "components/Filter/Filter";
import WithAuthRedirect from "HOC/WithAuthRedirect";
import css from './ContactsPage.module.css'


const ContactsPage = () => {
    return (
        <div className={css.hero}>
             <ContactForm/>
             <Filter/>
             <ContactList/>
        </div>
    )
}
export default WithAuthRedirect(ContactsPage, '/register');