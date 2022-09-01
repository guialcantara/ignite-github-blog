import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { ProfileContainer, ProfileContent, ProfileInfo } from "./styles";
import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'

interface Profile {
  avatar_url: string;
  bio: string;
  followers: number;
  html_url: string;
  company?: string;
  login: string;
  name: string
}

export function Profile() {
  const [profileData, setProfileData] = useState<Profile>()

  async function fetchProfile() {
    const response = await api.get('users/guialcantara')
    if (response) {
      setProfileData(response.data)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  if (!profileData) {
    return <h1>Loading...</h1>
  }

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={profileData.avatar_url} alt="" />
        <ProfileInfo>
          <header>
            <h2>{profileData.name}</h2>
            <a href={profileData.html_url}> GITHUB <BsBoxArrowUpRight /> </a>
          </header>

          <p>
            {profileData.bio}
          </p>

          <footer>
            <span>
              <FaGithub />
              {profileData.login}
            </span>

            {profileData.company && (
              <span>
                <FaBuilding />
                {profileData.company}
              </span>
            )}

            <span>
              <FaUserFriends />
              {profileData.followers} seguidores
            </span>

          </footer>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}