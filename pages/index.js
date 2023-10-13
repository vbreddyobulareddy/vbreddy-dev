import { gql } from "@apollo/client";
import createApolloClient from "@/app/apollo-client";
import ProfileLayout from "@/app/layouts/profileLayout";

export async function getStaticProps() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query ExampleQuery {
        reviews {
          id
        }
        votes {
          id
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
}

export default function Home(props) {
  console.log("--== Apollo Client getStaticProps Integration Done ", props);
  return <div>Hello Veera</div>;
}

Home.getLayout = function getLayout(page) {
  console.log("--==getLayout ", page);
  return (
    <>
      <ProfileLayout>{page}</ProfileLayout>
    </>
  );
};
