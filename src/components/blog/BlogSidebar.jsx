import React from "react";
import { FiSearch } from "react-icons/fi";
import blog1 from "../../assets/images/Blog/blog1.jpg";
import blog2 from "../../assets/images/Blog/blog2.jpg";

const BlogSidebar = () => {
  return (
    <aside className="blog-sidebar">

      <div className="sidebar-widget">

        <div className="search-box">
          <input
            type="text"
            placeholder="Search in Blog..."
          />
          <button>
            <FiSearch />
          </button>
        </div>
      </div>

      <div className="sidebar-widget">
        <h3>Categories</h3>

        <ul>
          <li>Fashion</li>
          <li>Electronics</li>
          <li>Furniture</li>
          <li>Lifestyle</li>
        </ul>
      </div>

      <div className="sidebar-widget">
        <h3>Popular Posts</h3>

        <div className="popular-posts">

          <div className="popular-post">
            <img src={blog1} alt="" />

            <div>
              <h4>Top Fashion Trends</h4>
              <span>May 03, 2021</span>
            </div>
          </div>

          <div className="popular-post">
            <img src={blog2} alt="" />

            <div>
              <h4>Modern Furniture Ideas</h4>
              <span>May 10, 2021</span>
            </div>
          </div>

        </div>
      </div>

    <div className="sidebar-widget custom-block">

  <h3>Custom Block</h3>

  <p>
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Vestibulum euismod.
  </p>

  <a href="/">Read More</a>

</div>

      <div className="sidebar-widget">
        <h3>Browse Tags</h3>

        <div className="tags">
          <span>Fashion</span>
          <span>Shop</span>
          <span>Lifestyle</span>
          <span>Design</span>
        </div>
      </div>

<div className="sidebar-widget">
  <h3>Calendar</h3>

  <table className="blog-calendar">
    <thead>
      <tr>
        <th>S</th>
        <th>M</th>
        <th>T</th>
        <th>W</th>
        <th>T</th>
        <th>F</th>
        <th>S</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>

      <tr>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td className="active-day">11</td>
        <td>12</td>
      </tr>

      <tr>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
      </tr>
    </tbody>
  </table>

</div>
    </aside>
  );
};

export default BlogSidebar;