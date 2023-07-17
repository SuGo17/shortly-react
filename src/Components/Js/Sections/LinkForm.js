import React, { useEffect, useState } from "react";
import useLinksContext from "../../../CustomHooks/useLinksContext";

function LinkForm() {
  const [activeLink, setActiveLink] = useState({ link: "", shortLink: "" });
  const [err, setErr] = useState(false);
  let { allLinks, setAllLinks } = useLinksContext();

  useEffect(() => {
    setAllLinks(JSON.parse(localStorage.getItem("allLinks")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickHandler = async (e) => {
    e.preventDefault();
    if (!activeLink.link) return setErr(true);
    const baseUrl = "https://api.shrtco.de/v2/shorten?url=";
    try {
      let res = await fetch(baseUrl + activeLink.link);
      let data = await res.json();
      let link = data && {
        link: data["result"]["original_link"],
        shortLink: data["result"]["short_link"],
      };
      allLinks
        ? await setAllLinks((prev) => [link, ...prev])
        : await setAllLinks([link]);
      setActiveLink({ link: "", shortLink: "" });
    } catch (err) {
      setErr(true);
      console.log(err.message);
    }
    localStorage.setItem("allLinks", JSON.stringify(allLinks));
  };
  return (
    <section className="shorten-form">
      <form>
        <input
          type="text"
          name="Link"
          id="link"
          className={err ? "err" : ""}
          value={activeLink.link}
          onChange={(e) => {
            setErr(false);
            setActiveLink({ link: e.target.value, shortLink: "" });
          }}
          placeholder="Shorten a link here..."
        />
        {err && <p className="error">Please add a valid link.</p>}
        <button className="form-btn btn" onClick={clickHandler}>
          Shorten It!
        </button>
      </form>
    </section>
  );
}

export default LinkForm;
