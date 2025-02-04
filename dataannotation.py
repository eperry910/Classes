import requests
import pandas as pd

def fetch_document_data(url):
    try:
        response = requests.get(url)
        
        # Ensuring successful response
        if response.status_code == 200:
            # Extract table turns it into pandas dataframe
            tables = pd.read_html(response.text)
            if tables:
                table_data = tables[0]
                print("Table content:")
                print(table_data)
                create_image_from_table(table_data)
            else:
                print("No table found in the document.")
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")

def create_image_from_table(table_data):
    # Skip headers
    table_data = table_data.iloc[1:]
    
    # Initialize a dictionary to store the coordinates and characters
    image_data = {}
    max_x = 0
    max_y = 0
    for index, row in table_data.iterrows():
        x = int(row[0])
        char = row[1]
        y = int(row[2])
        if(max_x < x):
            max_x = x
        if(max_y < y):
            max_y = y
        if (x, y) not in image_data:
            image_data[(x, y)] = char
    
    if not image_data:
        print("No valid table data found.")
        return
    

    
    # Create the image as a list of lists
    image = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]
    
    for (x, y), char in image_data.items():
        image[y][x] = char
    
    # Print the image
    for row in image:
        print(''.join(row))

# Example usage
url = "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub"  # Replace with the URL of your document
fetch_document_data(url)
