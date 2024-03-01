import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import { ProfileBox, ProfileDetails, ProfileHeader } from "./styles";
import profileImage from "../../../../assets/profileImage.svg";

export function Profile() {
  return (
    <ProfileBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <figure>
        <img src={profileImage} alt="" />
      </figure>

      <main>
        <ProfileHeader>
          <h1>Gabriel Augusto</h1>

          <span>
            <p>GITHUB</p>
            <ArrowSquareOut size={20} weight="fill" />
          </span>
        </ProfileHeader>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic
          libero suscipit molestias quam itaque corporis iusto nulla et sed
          exercitationem accusamus perferendis.
        </p>

        <ProfileDetails>
          <div>
            <GithubLogo size={20} weight="fill" />
            <p>gabriel</p>
          </div>
          <div>
            <Buildings size={20} weight="fill" />
            <p>Rocketseat</p>
          </div>
          <div>
            <Users size={20} weight="fill" />
            <p>30 seguidores</p>
          </div>
        </ProfileDetails>
      </main>
    </ProfileBox>
  );
}
