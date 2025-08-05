import Ewallet from "../../public/image/ewallet.png";
import FormBuilder from "../../public/image/form_builder.png";
import TicketingApi from "../../public/image/ticketing_api.png";

const projects = [
  {
    title: "E-Wallet REST API",
    description:
      "A RESTful API for managing user e-wallets, including registration, JWT login, balance top-up, transfers, and transaction history. Built using Spring Boot, DDD & Hexagonal Architecture.",
    techStack: ["Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/fauzinashrullah/spring-ewallet",
    live: null,
    image: Ewallet,
  },
  {
    title: "Form Builder API",
    description:
      "A RESTful API for creating and managing dynamic forms, complete with questions, answers, and JWT-based login system.",
    techStack: ["Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/fauzinashrullah/form-builder-api",
    live: null,
    image: FormBuilder,
  },
  {
    title: "Bioskop Ticketing API",
    description:
      "A RESTful API for creating and managing dynamic forms, complete with questions, answers, and JWT-based login system.",
    techStack: ["Golang", "Gin", "GORM", "PostgreSQL"],
    github: "https://github.com/fauzinashrullah/cinema-api",
    live: null,
    image: TicketingApi,
  },
];

export default projects;
