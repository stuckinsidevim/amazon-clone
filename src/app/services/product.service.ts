import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({ providedIn: "root" })
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      title:
        "Do It Today: Overcome procrastination, improve productivity and achieve more meaningful things",
      price: 155,
      imageUrl:
        "https://m.media-amazon.com/images/I/61jCkOVf1oL._AC_UY327_FMwebp_QL65_.jpg",
      author: "Foroux, Darius",
      stars: 4.5,
      reviewCount: 8426,
      publishedDate: "27 October 2020",
      actualPrice: 199,
      ebookPrice: 49,
      audiobookPrice: 0,
      summary:
        `<p><span>The International Bestseller: DO IT TODAY<br><br>Are you also tired of putting off your dreams until "tomorrow?" Guess what! Tomorrow never comes. Am I right? <br>I've procrastinated and putt off my desire to write a book for a decade. I always came up with excuses like, "it's not the right time." Or, "I need to do more research." <br>But in 2015 I got tired of this endless procrastination, and finally took action. Six months later, my first book was published. <br>Look, we all have limited time on our hands. And we're getting closer to death every single minute. That shouldn't scare. That should motivate you!<br>Time is limited, that's why we must do the things we want: Today.<br></span><span class="a-text-bold">In this "best of" collection, I've handpicked 30 of my best articles that help you to overcome procrastination, improve your productivity, and achieve all the things you always wanted. </span><span><br>Plus, I've written an extensive introduction about my life and work philosophy. <br>And I've made many improvements and edits to the articles. So the content of this book is different from the articles on my site.<br></span><span class="a-text-bold">In Do It Today, you'll learn:</span><span><br>1.Why we procrastinate and how we can overcome it<br>2.How to increase your productivity without being stressful<br>3.How to achieve more meaningful things in your life so you can enjoy it more<br>Are you ready to start reading this book? <br></span><span class="a-text-bold">If so: Do it today-not tomorrow.</span></p>`,
    },

    {
      id: 2,
      bestseller: true,
      title:
        "The Alchemist",
      price: 315,
      imageUrl:
        "https://m.media-amazon.com/images/I/51bVNTqHFlL._AC_UY327_FMwebp_QL65_.jpg",
      author: "Foroux, Darius",
      stars: 5,
      reviewCount: 144_406,
      publishedDate: "17 October 2005",
      actualPrice: 350,
      ebookPrice: 163,
      audiobookPrice: 10,
      summary:
        `<span>Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself</span>`,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
