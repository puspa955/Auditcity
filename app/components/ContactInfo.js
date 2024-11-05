const ContactInfo = ({ emails, phones }) => {
  return (
    <div>
      <h5>Emails:</h5>
      {/* Check if emails is an array and not undefined */}
      {Array.isArray(emails) && emails.length > 0 ? (
        emails.map((email, index) => (
          <p key={index}>{email}</p> 
        ))
      ) : (
        <p>No emails available.</p> 
      )}
      
      <h5>Phones:</h5>
      {/* Similar check for phones */}
      {Array.isArray(phones) && phones.length > 0 ? (
        phones.map((phone, index) => (
          <p key={index}>{phone}</p> 
        ))
      ) : (
        <p>No phones available.</p>
      )}
    </div>
  );
};

export default ContactInfo;
