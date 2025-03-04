import { paginateStaticPaths } from "zumo";

// import the parent page and its `prepare` action
import ParentPage from "../index";
import { preparePage } from "../index";

// compute the static paths for all the pagination pages
export async function getStaticPaths() {
  const pagination = await preparePage().then((res) => res.props.pagination);
  return paginateStaticPaths(pagination);
}

type PageStaticProps = {
  params: {
    page?: number;
  };
};

// prepare the current pagination page for viewing
export async function getStaticProps({ params }: PageStaticProps) {
  return await preparePage(params?.page);
}

// render the actual page content
export default function PaginationPage(props: any) {
  return ParentPage(props);
}
