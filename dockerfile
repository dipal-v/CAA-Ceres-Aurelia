FROM nginx:alpine
COPY dist /usr/share/nginx/html/caa-ceres-aurelia
EXPOSE 80