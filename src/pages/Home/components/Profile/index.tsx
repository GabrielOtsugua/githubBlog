import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import { ProfileBox, ProfileDetails, ProfileHeader } from "./styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Profile {
  avatar_url: "https://avatars.githubusercontent.com/u/106771949?v=4";
  bio: null;
  blog: "https://www.linkedin.com/in/gabriel-augusto-5aab41236/";
  company: null;
  created_at: "2022-06-02T18:39:53Z";
  email: null;
  events_url: "https://api.github.com/users/GabrielOtsugua/events{/privacy}";
  followers: 3;
  followers_url: "https://api.github.com/users/GabrielOtsugua/followers";
  following: 1;
  following_url: "https://api.github.com/users/GabrielOtsugua/following{/other_user}";
  gists_url: "https://api.github.com/users/GabrielOtsugua/gists{/gist_id}";
  gravatar_id: "";
  hireable: null;
  html_url: "https://github.com/GabrielOtsugua";
  id: 106771949;
  location: null;
  login: "GabrielOtsugua";
  name: "Gabriel Augusto";
  node_id: "U_kgDOBl017Q";
  organizations_url: "https://api.github.com/users/GabrielOtsugua/orgs";
  public_gists: 0;
  public_repos: 8;
  received_events_url: "https://api.github.com/users/GabrielOtsugua/received_events";
  repos_url: "https://api.github.com/users/GabrielOtsugua/repos";
  site_admin: false;
  starred_url: "https://api.github.com/users/GabrielOtsugua/starred{/owner}{/repo}";
  subscriptions_url: "https://api.github.com/users/GabrielOtsugua/subscriptions";
  twitter_username: null;
  type: "User";
  updated_at: "2024-02-05T23:58:41Z";
  url: "https://api.github.com/users/GabrielOtsugua";
}

export function Profile() {
  const [profileData, setProfileData] = useState({} as Profile);

  const getUser = async () => {
    const response = await fetch("https://api.github.com/users/GabrielOtsugua");
    const data = await response.json();

    setProfileData(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ProfileBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <figure>
        <img src={profileData.avatar_url} alt="" />
      </figure>

      <main>
        <ProfileHeader>
          <h1>{profileData.name}</h1>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://github.com/GabrielOtsugua"
            style={{ textDecoration: 0 }}
          >
            <span>
              <p>GITHUB</p>
              <ArrowSquareOut size={20} weight="fill" />
            </span>
          </Link>
        </ProfileHeader>

        <p>{profileData.bio}</p>

        <ProfileDetails>
          <div>
            <GithubLogo size={20} weight="fill" />
            <p>{profileData.login}</p>
          </div>
          <div>
            <Buildings size={20} weight="fill" />
            <p>Rocketseat</p>
          </div>
          <div>
            <Users size={20} weight="fill" />
            <p>{profileData.followers} seguidores</p>
          </div>
        </ProfileDetails>
      </main>
    </ProfileBox>
  );
}
