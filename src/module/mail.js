function mail(){
    return(
        <div className="last">
            <form action>
                <div className="message-icon">
                    <span>Send me an Email</span>
                </div>
                <div id="input-field">
                    <input type="text" placeholder="Name" name="Name" />
                </div>
                <div id="input-field">
                    <input type="text" placeholder="Phone No." name="Phone" />
                </div>
                <div id="input-email">
                    <input type="text" placeholder="Email Address" name="Email" />
                </div>
                <div id="input-email">
                    <textarea type="text" placeholder="Message" name="Message" rows= "10" defaultValue={""} />
                </div>
                <input type="submit" defaultValue="Submit" className="send-btn" />
            </form>
            </div>
    )
}
export default mail