import { connect } from "react-redux";
import { Holder } from "../components/Holder/Holder";

let mapStateToProps = (state) => ({
  articles: state.postsBySubreddit.posts?.items,
  isFetching: state.postsBySubreddit.posts?.isFetching,
});

export const HolderContainer = connect(mapStateToProps, {})(Holder);
