const mongoose = require("mongoose");
const {
  uploadPicture,
  uploadFile,
} = require("../middleware/uploadPictureMiddleware");
const News = require("../models/News");
const { fileRemover } = require("../utils/fileRemover");
const { v4: uuidv4 } = require("uuid");
const NewsCategories = require("../models/NewsCategories");

const createNews = async (req, res, next) => {
  try {
    const news = new News({
      // Change Post to News
      title: "sample title",
      caption: "sample caption",
      slug: uuidv4(),
      body: {
        type: "doc",
        content: [],
      },
      photo: "",
      user: req.user._id,
    });

    const createdNews = await news.save();
    return res.json(createdNews);
  } catch (error) {
    next(error);
  }
};

const updateNews = async (req, res, next) => {
  try {
    const news = await News.findOne({ slug: req.params.slug });

    if (!news) {
      const error = new Error("Post was not found");
      next(error);
      return;
    }

    const handleUpdateNewsData = async (data, file) => {
      try {
        if (!data) {
          const error = new Error("Data is undefined");
          throw error;
        }

        const { title, caption, slug, body, tags, categories, currentImage } =
          JSON.parse(data);
        news.title = title || news.title;
        news.caption = caption || news.caption;
        news.slug = slug || news.slug;
        news.body = body || news.body;
        news.tags = tags || news.tags;
        news.categories = categories || news.categories;

        if (file) {
          const imagePath = await uploadFile(file);
          post.photo = imagePath;
        } else if (currentImage) {
          post.photo = currentImage;
        }

        const updatedNews = await news.save();
        return res.json(updatedNews);
      } catch (error) {
        next(error);
      }
    };

    handleUpdateNewsData(req.body.document, req.file);
  } catch (error) {
    next(error);
  }
};

const deleteNews = async (req, res, next) => {
  try {
    const news = await News.findOneAndDelete({ slug: req.params.slug });

    if (!news) {
      const error = new Error("News was not found");
      return next(error);
    }

    fileRemover(news.photo);

    return res.json({
      message: "News is successfully deleted",
    });
  } catch (error) {
    next(error);
  }
};

const getNews = async (req, res, next) => {
  try {
    const news = await News.findOne({ slug: req.params.slug }).populate([
      {
        path: "user",
        select: ["avatar", "name"],
      },
      {
        path: "categories",
        select: ["title"],
      },
    ]);
    if (!news) {
      const error = new Error("News was not found");
      return next(error);
    }

    return res.json(news);
  } catch (error) {
    next(error);
  }
};

const getAllNews = async (req, res, next) => {
  try {
    const filter = req.query.searchKeyword;
    let where = {};
    if (filter) {
      where.title = { $regex: filter, $options: "i" };
    }
    let query = News.find(where);
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await News.find(where).countDocuments();
    const pages = Math.ceil(total / pageSize);

    res.header({
      "x-filter": filter,
      "x-totalcount": JSON.stringify(total),
      "x-currentpage": JSON.stringify(page),
      "x-pagesize": JSON.stringify(pageSize),
      "x-totalpagecount": JSON.stringify(pages),
    });

    if (page > pages) {
      return res.json([]);
    }

    const result = await query
      .skip(skip)
      .limit(pageSize)
      .populate([
        {
          path: "user",
          select: ["avatar", "name", "verified"],
        },
        {
          path: "categories",
          select: ["title"],
        },
      ])
      .sort({ updatedAt: "desc" });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

const getNewsByCategory = async (req, res, next) => {
  try {
    const filter = req.query.searchKeyword;
    const categoryTitle = req.query.category;
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;

    let where = {};
    if (filter) {
      where.title = { $regex: filter, $options: "i" };
    }

    let categoryIds = [];
    if (categoryTitle) {
      const categories = await NewsCategories.find({
        title: { $regex: categoryTitle, $options: "i" },
      }).select("_id");
      categoryIds = categories.map((category) => category._id);
      where.categories = { $in: categoryIds };
    }

    const total = await News.find(where).countDocuments();
    const pages = Math.ceil(total / pageSize);

    res.header({
      "x-filter": filter || "",
      "x-totalcount": total.toString(),
      "x-currentpage": page.toString(),
      "x-pagesize": pageSize.toString(),
      "x-totalpagecount": pages.toString(),
    });

    if (page > pages) {
      return res.json([]);
    }

    const result = await News.find(where)
      .skip(skip)
      .limit(pageSize)
      .populate({
        path: "categories",
        select: "title",
      })
      .sort({ updatedAt: "desc" });

    return res.json(result);
  } catch (error) {
    console.error("Error in getNewsByCategory:", error);
    next(error);
  }
};

module.exports = {
  createNews,
  updateNews,
  deleteNews,
  getNews,
  getAllNews,
  getNewsByCategory,
};
