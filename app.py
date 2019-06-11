from flask import Flask, render_template, request, redirect, url_for, make_response
# from flask_mysqldb import MySQL
from flaskext.mysql import MySQL
# import pdf-export dependencies
import pandas as pd
import matplotlib
from pylab import title, figure, xlabel, ylabel, xticks, bar, legend, axis, savefig
from fpdf import FPDF
from werkzeug.datastructures import Headers
from werkzeug.wrappers import Response



app = Flask(__name__)
# initialize MYSQL
# mysql = MySQL()
#
# # Configure MySQL
# app.config['MYSQL_DATABASE_USER'] = 'DB USER NAME'
# app.config['MYSQL_DATABASE_PASSWORD'] = 'DB PASSWORD'
# app.config['MYSQL_DATABASE_DB'] = 'DB NAME'
# app.config['MYSQL_DATABASE_HOST'] = 'DB HOST NAME'
# # initialize with app instance
# mysql.init_app(app)
#
# # Make connection
# conn = mysql.connect()
# # get cursor
# cursor =conn.cursor()
# # get categories table data as list
# cursor.execute("SELECT * from categories")
# data = list(cursor.fetchall())


# Home route
@app.route('/')
def home():
    return render_template('index.html')



# Frequency route
@app.route('/frequency/')
def frequency():
    return render_template('frequency.html')



# Touchpoint-banks route
@app.route('/touchpoint-banks/')
def touchpoint_banks():
    return render_template('touchpoint-banks.html')



# Customer Journey route
@app.route('/customer-journey/')
def customer_journey():
    return render_template('customer-journey.html')



# Product Category route
@app.route('/product-category/')
def product_category():
    return render_template('product-category.html')



# Promotions route
@app.route('/promotions/')
def promotions():
    return render_template('promotions.html')



# Topics route
@app.route('/topics/')
def topics():
    return render_template('topics.html')



# Mail route
@app.route('/mail/')
def mail():
    return render_template('mail.html')



# test route, not used this route in prod mode
@app.route('/test/')
def test():
    df = pd.DataFrame()
    df['Question'] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    df['Data 1'] = [3, 4, 5, 3, 1, 3, 2]
    df['Data 2'] = [3, 3, 4, 4, 5, 1, 7]

    title("Direct Marketing")
    xlabel('')
    ylabel('')

    # c = [2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 14.0]
    c = [1.28, 2.56, 3.84, 5.12, 6.40, 7.68, 8.96]
    m = [x - 0.5 for x in c]

    xticks(c, df['Question'], rotation=20)

    bar(m, df['Data 1'], width=0.5, color="#91eb87", label="Data 1")
    bar(c, df['Data 2'], width=0.5, color="#eb879c", label="Data 2")

    legend()
    axis([0, 10, 0, 8])
    savefig('barchart.png')

    pdf = FPDF()
    pdf.add_page()
    pdf.set_xy(0, 0)
    pdf.set_font('arial', 'B', 12)
    pdf.cell(-10)
    # pdf.cell(75, 10, "A Tabular and Graphical Report of Professor Criss's Ratings by Users Charles and Mike", 0, 2, 'C')
    # pdf.cell(90, 10, " ", 0, 2, 'C')
    # pdf.cell(-40)
    # pdf.cell(50, 10, 'Question', 1, 0, 'C')
    # pdf.cell(40, 10, 'Charles', 1, 0, 'C')
    # pdf.cell(40, 10, 'Mike', 1, 2, 'C')
    # pdf.cell(-90)
    # pdf.set_font('arial', '', 12)
    # for i in range(0, len(df)):
    #     pdf.cell(50, 10, '%s' % (df['Question'].ix[i]), 1, 0, 'C')
    #     pdf.cell(40, 10, '%s' % (str(df.Mike.ix[i])), 1, 0, 'C')
    #     pdf.cell(40, 10, '%s' % (str(df.Charles.ix[i])), 1, 2, 'C')
    #     pdf.cell(-90)
    # pdf.cell(90, 10, " ", 0, 2, 'C')
    # pdf.cell(-30)
    pdf.image('barchart.png', x = None, y = None, w = 220, h = 200, type = '', link = '')

    # add a filename
    # headers = Headers()
    # headers.set('Content-Disposition', 'attachment', filename='TestReport.pdf')
    #
    # return Response(pdf.output('test.pdf', 'F'),
    #         mimetype='application/pdf', headers=headers)
    response = make_response(pdf.output(dest='S').encode('latin-1'))
    response.headers.set('Content-Disposition', 'attachment', filename='test.pdf')
    response.headers.set('Content-Type', 'application/pdf')
    return response



if __name__ == '__main__':
    app.run(debug = True)
