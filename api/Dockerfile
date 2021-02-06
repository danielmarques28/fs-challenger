FROM ruby:2.7

EXPOSE 3000

RUN mkdir /code

WORKDIR /code

ADD . /code

RUN bundle install

CMD ["bundle", "exec", "rails", "s", "-p", "3000", "-b", "'0.0.0.0'"]
