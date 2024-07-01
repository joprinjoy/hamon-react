import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GalleryData } from "../../store/gallery";

import "./catpage.css";

const Catpage = () => {
  const dispatch = useDispatch();
  //gallery
  const galleryData = useSelector((state) => state.gallery.data);

  const isloading = useSelector((state) => state.gallery.status);

  useEffect(() => {
    dispatch(GalleryData());
  }, []);

  const handleFresh = () => {
    dispatch(GalleryData());
  };
  return (
    <>
      {console.log("status in jsx", isloading)}
      {isloading === "failed" ? (
        <div>404 </div>
      ) : (
        <div>
          {isloading === "pending" ? (
            <div>Loading..</div>
          ) : (
            <div>
              {galleryData.length > 0 ? (
                <>
                  <h1>Cat</h1>
                  <img src={galleryData[0].url} alt="Cat" />
                  <div>
                    <button onClick={handleFresh}>Refresh</button>
                  </div>
                </>
              ) : (
                <p>Poochayisam begins..</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Catpage;
