export default function Contact() {
  return (
    <div>
       <form action="#">

<div class="input-box">
    <input type="text" placeholder="Enter Your Name" />
    <input type="text" placeholder="Enter Your Email" />
</div>

<div class="input-box">
    <input type="text" placeholder="Enter Your Phone" />
    <input type="text" placeholder="Enter Your Address" />
    <input type="text" placeholder="Enter Your Subject" />
</div>

<textarea name="message" id="message" cols="30" rows="10"
    placeholder="Enter Your Message"></textarea>
<input type="submit" value="Send Message" class="btn" />
</form>
</div>

  );
}
