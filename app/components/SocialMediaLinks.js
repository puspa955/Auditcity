import { Button } from "../ui/button"; 

const SocialMediaLinks = ({ profiles }) => {
  return (
    <div className="flex space-x-4 my-4">
      {/* Check if profiles is an array and not undefined */}
      {Array.isArray(profiles) && profiles.length > 0 ? (
        profiles.map((profile, index) => (
          <Button key={index} as="a" href={profile.url} target="_blank" variant="outline">
            {profile.network}
          </Button>
        ))
      ) : (
        <p>No social media links available.</p> 
      )}
    </div>
  );
};

export default SocialMediaLinks;
