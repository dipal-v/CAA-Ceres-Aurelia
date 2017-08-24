FROM nginx:alpine
COPY dist /usr/share/nginx/html/caa-ceres-aurelia-webpack
EXPOSE 80