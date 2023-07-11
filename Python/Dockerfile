FROM python:3.9-slim-buster

WORKDIR /var/www/python
COPY . /var/www/python

RUN apt-get update && apt-get install nano -y 

RUN pip install -r requirements.txt
RUN pip install --upgrade python-crontab

EXPOSE 8012

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8012", "--reload"]