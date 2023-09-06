import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <div className="space-y-4 w-full h-screen flex flex-col justify-center items-center">
      <h2>Contact</h2>
      <p>68constructionllc@gmail.com</p>
      <p>(206) 383-4582</p>
      <h2 className="pt-4">Socials</h2>
      <div className="flex flex-row justify-center space-x-2">
        <SocialIcon url="https://www.instagram.com/68constructionllc/" />
        <SocialIcon url="https://www.facebook.com/68constructionllc" />
        <SocialIcon url="https://www.yelp.com/biz/68-construction-seattle-2" />
      </div>
    </div>
  );
}
export default Contact;
