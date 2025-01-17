FROM python:3.10-slim
WORKDIR /app
# Step 3: Copy the 'sa' folder into the container
COPY . /app

# Step 4: Install virtualenv
RUN pip install --no-cache-dir --upgrade pip virtualenv

# Step 5: Create a virtual environment
RUN python -m venv /app/venv

# Step 7: Set the PATH to use the virtual environment by default
ENV PATH="/app/venv/bin:$PATH"

# Step 6:  install dependencies
RUN pip install --no-cache-dir -r /app/sa/requirement.txt

# Step 8: Specify the entry point for the application
CMD ["python", "/app/sa/sentiments_analysis.py"]


