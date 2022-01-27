import type { NextPage } from 'next';
import Link from 'next/link';
import { Education } from '../components/independent/Education';
import { Experience } from '../components/independent/Experience';
import { Layout } from '../components/independent/Layout';
import { Skills } from '../components/independent/Skills';
import { getLayoutAndMetaDataProps, getProfileDataProps, LayoutMetaProps } from '../helpers/getPropData';

interface ProfileProps {
  experiences: { company: string; position: string; content: string; startDate: string; endDate: string }[];
  education: { university: string; degree: string; content: string; startDate: string; endDate: string }[];
  skills: { title: string; percentage: number }[];
}

type Props = ProfileProps & LayoutMetaProps;

const Profile: NextPage<Props> = ({ experiences, education, logo, links, meta, footer, skills }) => {
  return (
    <>
      <Experience experiences={experiences} />
      <Education education={education} />
      <Skills skills={skills} />
      <Link href="/resume.pdf">
        <a
          className="text-sm font-semibold border text-white bg-gray-700 border-green-200 rounded-full p-4 mb-4"
          target="_blank"
          download
        >
          Download PDF version
        </a>
      </Link>
    </>
  );
};

export default Profile;

export const getStaticProps = async () => {
  return {
    props: {
      ...getLayoutAndMetaDataProps('/profile'),
      ...getProfileDataProps(),
    },
  };
};
